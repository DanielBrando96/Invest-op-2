import numpy as np

# Matriz de comparación A
A = np.array([[1, 2, 6], [1/2, 1, 3], [1/6, 1/3, 1]])

# Normalizar la matriz
column_sums = A.sum(axis=0)
A_norm = A / column_sums

# Calcular el vector de prioridades
priorities = A_norm.mean(axis=1)
n = len(A)
lambda_max = max(np.linalg.eigvals(A))
CI = (lambda_max - len(A)) / (len(A) - 1)
random_indices = {1: 0, 2: 0, 3: 0.58, 4: 0.90, 5: 1.12, 6: 1.24, 7: 1.32, 8: 1.41, 9: 1.45, 10: 1.49, 11: 1.51, 12: 1.48, 13: 1.56, 14: 1.57, 15: 1.59}
RI = random_indices[n]
CR = CI / RI

CI_decimal = '{:.15f}'.format(CI)
CR_decimal = '{:.15f}'.format(CR)
