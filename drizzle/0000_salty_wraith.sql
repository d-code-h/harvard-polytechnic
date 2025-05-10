-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE SEQUENCE "public"."application_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE TABLE "applications" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_id" text,
	"surname" text NOT NULL,
	"first_name" text NOT NULL,
	"other_name" text,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"category" text NOT NULL,
	"program" text NOT NULL,
	"gender" text NOT NULL,
	"department" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "applications_application_id_key" UNIQUE("application_id"),
	CONSTRAINT "applications_email_key" UNIQUE("email"),
	CONSTRAINT "applications_phone_key" UNIQUE("phone")
);

*/