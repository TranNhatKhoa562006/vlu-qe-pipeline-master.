const login = require('./auth');

describe('Regression Tests', () => {
    test('TC01: Đăng nhập sai mật khẩu', () => {
        expect(login('admin', 'wrongpassword')).toBe(false);
    });

    test('TC02: Username bị rỗng', () => {
        expect(login('', '123')).toBe(false);
    });

    test('TC03: Chứa ký tự đặc biệt', () => {
        expect(login('admin!', '123')).toBe(false);
    });

    test('TC04: Tài khoản bị khóa', () => {
        expect(login('locked_user', '123')).toBe(false);
    });
});
