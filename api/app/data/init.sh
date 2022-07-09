export PGUSER=postgres

# 1. Création d'un utilisateur en BDD ocolis_admin (with login)
createuser wall --login --password 

# 2. Création d'une BDD ocolis dont le propriétaire est ocolis_admin
createdb wall --owner wall

# 3. Initialiser Sqitch
sqitch init wall_sqitch --engine pg # on indique qu'on travaille avec postgres (pg)