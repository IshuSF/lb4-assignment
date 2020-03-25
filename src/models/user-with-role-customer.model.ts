import {Model, model, property} from '@loopback/repository';

@model()
export class UserWithRoleCustomer extends Model {
  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
  })
  middlename?: string;

  @property({
    type: 'string',
  })
  lastname?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  phoneno?: string;

  @property({
    type: 'number',
  })
  roleKey?: number;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
  })
  customerName?: string;

  constructor(data?: Partial<UserWithRoleCustomer>) {
    super(data);
  }
}

export interface UserWithRoleCustomerRelations {
  // describe navigational properties here
}

export type UserWithRoleCustomerWithRelations = UserWithRoleCustomer &
  UserWithRoleCustomerRelations;
