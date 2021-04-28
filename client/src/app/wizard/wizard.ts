export interface Wizard {
  from: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
  };
  to: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
  };
  weight: number;
  shippingOption: string;
  shippingCost: number;
}
