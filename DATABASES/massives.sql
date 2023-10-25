create table employees
(
    id int primary key,
    phones text[]
);

insert into employees(id, phones)
values (1, '{8 911 111 11 11}'),
       (2, '{8 922 222 22 22, 8 933 333 33 33}');

select *
from employees e
where phones @> '{8 911 111 11 11}'


--------
select * from employees

-- добавление индекса
create index employee_degrees on employees using gin(degrees);

-- поиск по массиву и проверка того, что индекс действительно работает
set enable_seqscan = false;

explain
select *
from employees
where degrees && array['phd'];


-------
create table employees 
(
	id int generated alqays as identity,
	education jsonb
);

insert into empoyees(education) values

-- на json тоже можно накидовать инвертированный индекс

--поиск
where education  @> '[{"name": "МГУ"}]';

-- mutillidae docker склонировать. 

