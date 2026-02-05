-- use company_db


-- select emp_name , salary
-- from employees
-- where salary = (
-- select max(salary)
-- from employees
-- );







-- select emp_name , salary
-- from employees
-- where salary = (
-- select min(salary)
-- from employees
-- )


-- select emp_name
-- from employees
-- where dept_id in (
-- select dept_id
-- from departments
-- where location = 'banglore'
-- );



--  select emp_name
--  from employees
--  where emp_id in (
--  select emp_id
--  from employee_roles
--  );




--  select emp_name
--  from employees
--  where emp_id not in (
--  select emp_id
--  from employee_roles
--  );




-- select emp_name ,
-- (select dept_name from departments d
-- where d.dept_id = e.dept_id) as departments
-- from employees e



-- select emp_name , salary
-- from employees e
-- where salary > (
-- select avg(salary)
-- from employees
-- where dept_id = e.dept_id
-- )

-- select d.dept_name,
-- avg(e.salary)as avg_salary
-- from employees e
-- join departments d on e.dept_id = d.dept_id
-- group by d.dept_name


-- select emp_name
-- from employees e 
-- where exists (
-- select 1 from payroll p
-- where p.emp_id = e.emp_id
-- );


-- select distinct dept_id from employees;

-- select distinct dept_id , status
-- from employees;


-- select distinct emp_name , dept_id
-- from employees;








