-- Verify wall_sqitch:1_createTable on pg

BEGIN;

SELECT * FROM public.user LIMIT 5 ;

SELECT * FROM public.document LIMIT 5 ;

ROLLBACK;
