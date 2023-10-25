from random import choice

figures = ['человечек', 'устроитель', 'свинья', 'больщой', 
           'али-баба', 'аббат', 'дракон', 'фея', 'принцесса']

colors = ['красный', 'желтый', 'зеленый', 'синий', 'черный']

figure = choice(figures)
if figure in ['дракон', 'фея']:
    print(figure)
else:
    color = choice(colors)
    print(color, figure)
