-- MYSQL ==> DATABASE ==> TABLE ==> COLUMN & ROW


-- create table

CREATE TABLE users (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(30) NOT NULL,
email VARCHAR(30) NOT NULL,
password VARCHAR(255) NOT NULL
);

-- insert data
INSERT INTO users (username, email, password)
values ("fikrii","fikri@fikri.com","123123");

-- update data
UPDATE users
SET username="seto"
where id=1;

-- delete data
DELETE from users
where id =2;

-- CRUD (Create read update delete)

-- READ
    -- COLUMN
    -- FILTERING
    -- SORT
    -- GROUPING



-- COLUMN SELECTION
SELECT Name,Sex from users;
SELECT * from users;

-- FILTERING
SELECT * from users where Pclass = 1;
SELECT * from users where Pclass = 1 and Survived = 0;
SELECT * from users where (Pclass = 1 or Pclass = 3) and Survived=0;

-- SORT
SELECT * from users order by Age ;
SELECT * from users where Survived = 1 order by Age Desc;

-- SUB QUERY
-- data penumpang pria yang umurnya diatas rata rata data penumpang pria
SELECT * from users where Sex = 'male' and Age > (SELECT AVG(Age) from users where Sex = 'male');
SELECT * from users where Fare > (SELECT AVG(Fare) from users);

-- GROUPING
-- buat kolom kategorical
-- data ada numerical dan categorical

SELECT COUNT(*),Survived from users group by Survived;
SELECT COUNT(*),Pclass from users group by Pclass;

SELECT COUNT(*), Pclass from users where Survived = 0 group by Pclass;

SELECT COUNT(*), Sex from users group by Sex;


SELECT AVG(Fare),Pclass from users group by Pclass;

SELECT AVG(Age),Pclass from users group by Pclass order by AVG(Age);



-- HAVING & LIMIT

SELECT Name ,Sex as Gender, Pclass as Class from users having Class = 1 LIMIT 10;

-- LIKE
SELECT * from users where Name LIKE "a%";















-- CARI DATA PENUMPANG WANITA YANG SELAMAT DAN BERADA DI PCLASS 3
SELECT * from users where Sex = 'female' and Survived = 1 and Pclass = 3;

-- CARI DATA PENUMPANG PRIA YANG SELAMAT DAN BERSAMA PARENTNYA
SELECT * from users where Sex = 'male' and Parch > 0 and Survived = 1;

-- CARI DATA PENUMPANG PRIA YANG UMURNYA DIBAWAH 30 TAHUN DAN MENINGGAL
SELECT * from users where Sex = 'male' and Age < 30 and Survived = 0;

-- CARI RATA RATA UMUR PENUMPANG PRIA (belum diajarin coba googling)
SELECT AVG(Age) from users where Sex = 'male';

-- CARI RATA RATA FARE DARI PCLASS 1 (belum diajarin coba googling)
SELECT Avg(Fare) from users where Pclass = 1;






-- Ada berapa penumpang yang ada nama John;
SELECT count(*) as total_john from users where Name Like "%John%" || Name Like "%john%";

-- Tampilkan data  pria yang meninggal dan umurnya di bawah rata rata pria;
SELECT * from users where Sex = 'male' and Survived = 0 and Age < (SELECT AVG(Age) from users where Sex = 'male');


-- Perbandingan Laki laki dan wanita yang meninggal;
SELECT count(*),Sex from users where Survived = 0 group by Sex;

-- Perbandingan Tiap tiap Pclass yang hidup;
SELECT count(*) as total_hidup,Pclass from users where Survived = 1 group by Pclass;

-- Tampilkan penumpang meninggal dan harga tiketnya diatas rata rata harga tiket;
SELECT * from users where Survived = 0 and Fare > (SELECT AVG(Fare) from users);


-- Query Language

-- MYSQL (DBMS) ==> Databases ==> Tables ==> Row & Column

-- SELECT - WHERE - GROUPBY - ORDER BY






