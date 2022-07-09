-- Deploy wall_sqitch:1_createTable to pg

BEGIN;

-- Table: public.user

-- DROP TABLE IF EXISTS public."user";

--creation d'un domaine pour les mails ;
CREATE DOMAIN emailcheck AS text 
CHECK(
    VALUE ~'^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'
);


CREATE TABLE IF NOT EXISTS public.user
(
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname text COLLATE pg_catalog."default" NOT NULL,
    lastname text COLLATE pg_catalog."default" NOT NULL,
    email emailcheck COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL
    
);


CREATE TABLE IF NOT EXISTS public.document
(
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    image bytea,
    document bytea,
    CONSTRAINT fk_user
      FOREIGN KEY(id) 
	  REFERENCES public.user(id)
);


COMMIT;
