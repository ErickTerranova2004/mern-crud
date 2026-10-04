const { sanitizers, validateAge, sanitizeUser } = require('../utils/sanitizers');

describe('sanitizers', () => {
  test('email se convierte a minúsculas', () => {
    expect(sanitizers.email('ERICK@Correo.COM')).toBe('erick@correo.com');
  });

  test('name se capitaliza', () => {
    expect(sanitizers.name('erick terranova')).toBe('Erick Terranova');
  });

  test('age convierte texto numérico a entero', () => {
    expect(sanitizers.age('25')).toBe(25);
  });

  test('age devuelve vacío si no es número', () => {
    expect(sanitizers.age('abc')).toBe('');
    expect(sanitizers.age('')).toBe('');
  });

  test('gender solo acepta m o f', () => {
    expect(sanitizers.gender('m')).toBe('m');
    expect(sanitizers.gender('f')).toBe('f');
    expect(sanitizers.gender('x')).toBe('');
  });
});

describe('validateAge', () => {
  test('rechaza menores de 5 años', () => {
    expect(validateAge(4)).toMatch(/too young/);
  });

  test('rechaza mayores de 130 años', () => {
    expect(validateAge(131)).toMatch(/too old/);
  });

  test('acepta edades válidas y vacío', () => {
    expect(validateAge(30)).toBeNull();
    expect(validateAge('')).toBeNull();
  });
});

describe('sanitizeUser', () => {
  test('limpia un cuerpo completo', () => {
    expect(sanitizeUser({ name: 'ana lopez', email: 'ANA@MAIL.COM', age: '30', gender: 'f' }))
      .toEqual({ name: 'Ana Lopez', email: 'ana@mail.com', age: 30, gender: 'f' });
  });

  test('tolera campos faltantes', () => {
    expect(sanitizeUser({})).toEqual({ name: '', email: '', age: '', gender: '' });
  });
});
