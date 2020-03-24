import {bind, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {UserWithRoleCustomer} from '../models';
import {CustomerRepository, UserRepository} from '../repositories';

@bind({scope: BindingScope.TRANSIENT})
export class UserService {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
  ) {}

  async getUsersWithRoleCust() {
    const users = await this.userRepository.find();
    const userWithRoleCustomerArr: UserWithRoleCustomer[] = [];
    for (const user of users) {
      const userWithRoleCustomer = new UserWithRoleCustomer();
      userWithRoleCustomer.firstname = user.firstname;
      userWithRoleCustomer.middlename = user.middlename;
      userWithRoleCustomer.lastname = user.lastname;
      userWithRoleCustomer.email = user.email;
      userWithRoleCustomer.phoneno = user.phoneno;
      userWithRoleCustomer.roleKey = user.roleId;
      userWithRoleCustomer.address = user.address;
      const customerId = user.customerId;
      userWithRoleCustomer.customerName = (
        await this.customerRepository.findById(customerId)
      ).name;
      userWithRoleCustomerArr.push(userWithRoleCustomer);
    }

    return userWithRoleCustomerArr;
  }
}
