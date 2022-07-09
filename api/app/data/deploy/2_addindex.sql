-- SQLBook: Code
-- Deploy wall_sqitch:2_addindex to pg

BEGIN;

CREATE INDEX "index_mail" ON 'public.user' ('email')


COMMIT;
