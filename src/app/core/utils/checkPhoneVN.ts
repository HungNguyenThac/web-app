export class checkPhoneVN {
  static checkPhone(phone: string) {
    const phoneRegex = /^((0|\+84)[1|3|5|7|8|9])+([0-9]{8})$/;
    return phoneRegex.test(phone);
  }
}
