const login = require('./auth');

test('Smoke Test: Đăng nhập đúng (admin/123) -> true', () => {
    expect(login('admin', '123')).toBe(true);
});
