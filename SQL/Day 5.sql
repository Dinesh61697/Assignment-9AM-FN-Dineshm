-- use company_db;

-- select e.emp_name , d.dept_name , e.age
-- from employees e
-- inner join departments d
-- on e.dept_id = d.dept_id


-- select e.emp_name , d.dept_name
-- from employees e
-- left join departments d
-- on e.dept_id = d.dept_id


-- select e.emp_name , d.dept_name
-- from employees e
-- right join departments d
-- on e.dept_id = d.dept_id


-- select e.emp_name , d.dept_name
-- from employees e left join  departments d on e.dept_id = d.dept_id

-- select e.emp_name , d.dept_name
-- from employees e
-- right join departments d 
-- on e.dept_id = d.dept_id;


-- create table roles (
-- role_id int primary key,
-- role_name varchar(50) not null
-- );

-- insert into roles values
-- (1, 'HR Executive'),
-- (2, 'software Engineer'),
-- (3, 'senior developer'),
-- (4, 'Accountant');


-- create table employee_roles (
-- emp_id int,
-- role_id int,
-- primary key (emp_id, role_id),
-- foreign key (emp_id) references employees(emp_id),
-- foreign key (role_id) references roles(role_id)
-- );


-- insert into employee_roles values
-- (101, 2),
-- (101, 3),
-- (102, 1),
-- (103, 1),
-- (104, 4);


--  select e.emp_name , r.role_name
--  from employees e
--  join employees_role er on e.emp_id = er.emp_id
--  join roles r on er.role_id = r.role_id;




