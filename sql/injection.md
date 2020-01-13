```sql

--  table names
(SELECT table_name FROM information_schema.tables where table_schema = (SELECT DATABASE()))

--  column names for table
(SELECT table_name, column_name FROM information_schema.columns WHERE table_name = 'awards' )

--  all columns names
(SELECT table_name, column_name FROM information_schema.columns WHERE table_name in (SELECT table_name FROM information_schema.tables where table_schema = (SELECT DATABASE())))

```