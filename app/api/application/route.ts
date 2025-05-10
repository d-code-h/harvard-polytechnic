import { NextResponse } from 'next/server';

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { applicationsTable } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { isLegitTransaction, verifyTransaction } from '@/lib/utils';

const db = drizzle(process.env.DATABASE_URL!);

interface DatabaseError {
  detail?: string;
  message?: string;
}

function isDatabaseError(error: unknown): error is DatabaseError {
  return typeof error === 'object' && error !== null && 'detail' in error;
}

export async function POST(request: Request) {
  const data = await request.json();

  try {
    // Check transaction validity
    if (data.transactionId) {
      const transaction = await verifyTransaction(data.transactionId);
      if (transaction) {
        const isLegit = await isLegitTransaction(data, transaction);

        if (!isLegit) {
          throw new Error(
            'Transaction details do not tally with user credentials!',
          );
        }
      } else {
        throw new Error('Transaction ID is not verifiable!');
      }
    } else {
      throw new Error('Transaction ID is missing');
    }

    const res = await db.insert(applicationsTable).values(data).returning({
      insertedId: applicationsTable.id,
      applicationId: applicationsTable.applicationId,
    });

    return NextResponse.json({
      status: 'success',
      message: 'Application successful',
      data: res[0],
    });
  } catch (error: unknown) {
    if (isDatabaseError(error)) {
      return NextResponse.json({
        status: 'error',
        message: 'User with same information already exist',
      });
    } else if (error instanceof Error) {
      return NextResponse.json({
        status: 'error',
        message: error.message || 'Something went wrong. Try again later.',
      });
    } else {
      return NextResponse.json({
        status: 'error',
        message: 'Something went wrong. Try again later.',
      });
    }
  }
}

export async function DELETE(request: Request) {
  const data = await request.json();

  try {
    const res = await db
      .delete(applicationsTable)
      .where(eq(applicationsTable.email, data.email))
      .returning({
        deletedId: applicationsTable.id,
      });

    return NextResponse.json({
      status: 'success',
      message: 'Application deleted successfully',
      data: res[0],
    });
  } catch (error: unknown) {
    if (isDatabaseError(error)) {
      return NextResponse.json({
        status: 'error',
        message: error.detail || 'Something went wrong',
      });
    } else {
      return NextResponse.json({
        status: 'error',
        message: 'Something went wrong',
      });
    }
  }
}
