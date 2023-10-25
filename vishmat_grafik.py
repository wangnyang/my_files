# y = 0.25x^2, y = 3x - 0.5x^2

from matplotlib import pyplot as plt

xs = range(-10, 10)
ys_1 = [0.25 * (x ** 2) for x in xs]
ys_2 = [(3 * x - 0.5 * (x ** 2)) for x in xs]
ys_y = range(-100, 100)
xs_y = [0 for y in ys_y]
xs_x = range(-10, 10)
ys_x = [0 for x in xs_x]

fig, axes = plt.subplots(1)
line_1 = axes.plot(xs, ys_1, color='red', label='0.25x^2')
line_2 = axes.plot(xs, ys_2, color='#F5D547', label='3x - 0.5x^2')
line_y = axes.plot(xs_y, ys_y, color='black')
line_x = axes.plot(xs_x, ys_x, color='black')

axes.legend()
plt.show()
