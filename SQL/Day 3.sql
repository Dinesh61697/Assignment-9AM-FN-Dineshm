-- create database company_db;
-- use company_db;


-- create table departments(
-- dept_id int primary key,
-- dept_name varchar (50) NOT NULL,
-- location varchar(50)
-- );

-- insert into departments values
-- (1, 'HR', 'chennai'),
-- (2, 'IT', 'banglore'),
-- (3, 'finance', 'mumbai'),
-- (4, 'sales' , 'delhi');

-- create table employees (
-- emp_id int primary key ,
-- emp_name varchar(50) not null,
-- age int check (age >= 18),
-- email varchar (100) unique,
-- phone varchar(15),
-- hire_date date ,
-- salary int check (salary > 10000),
-- dept_id int,
-- status varchar (20) default 'active',
-- foreign key (dept_id) references departments(dept_id)
-- );


-- insert into employees values
-- (101, 'Arun', 25, 'arun@company.com', '9876543210', '2022-01-10', 30000, 2, 'active'),
-- (102, 'Priya', 24, 'priya@company.com', '9876543211', '2021-03-15', 28000, 1, 'active'),
-- (103, 'Rahul', 28, 'rahul@company.com', '9876543212', '2020-07-20', 45000, 2, 'inactive'),
-- (104, 'Sneha', 26, 'sneha@company.com', '9876543213', '2022-11-01', 32000, 3, 'active'),
-- (105, 'Karthik', 30, 'karthik@company.com', '9876543214', '2019-05-25', 50000, 4, 'active'),
-- (106, 'Anjali', 27, 'anjali@company.com', '9876543215', '2023-02-10', 26000, 1, 'active');

-- select * from employees;


-- select emp_name , salary
-- from employees ;


-- select distinct dept_id
-- from employees;


-- select * from employees
-- where dept_id = 2

-- select * from employees 
-- where salary > 30000;


-- select * from employees
-- where salary > 40000


-- select * from employees 
-- where age <=25;

-- select * from employees
-- where not status = 'active';

-- select * from employees
-- where dept_id in (1, 4)


-- select * from employees
-- where emp_name like '%%ha'

insert into employees
values
(107, 'Manoj' , 29 ,' manoj@gmail.com' , '1548946516','2020-04-5', 45000, 1, 'inactive'),
(108, 'Divya' , 23 ,' Divya@gmail.com' , '6549946515','2023-09-12', 32000, 2, 'active'),
(109, 'Sanjay' , 24 ,' Sanjaiy@gmail.com' , '6354844165','2025-02-15', 25000, 4, 'inactive'),
(110, 'Pooja' , 30 ,' Pooja@gmail.com' , '45469465165','2026-01-23', 15000, 3, 'active'),
(111, 'Keeru' , 4 ,' Keeru@gmail.com' , '9659465165','2024-01-28', 50000, 1, 'active');

select * from employees
where phone is null ; 
