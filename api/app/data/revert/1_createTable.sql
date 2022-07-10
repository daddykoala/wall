-- SQLBook: Code
-- Revert wall_sqitch:1_createTable from pg

BEGIN;
DROP TABLE public.document;
DROP TABLE public.user;


-- XXX Add DDLs here.

COMMIT;
