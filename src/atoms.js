import { atom } from 'recoil';

export const typeState = atom({
  key: 'type',
  default: '',
});

export const vehicleTypeState = atom({
  key: 'vehicle',
  default: '',
});

export const washTypeState = atom({
  key: 'wash',
  default: '',
});

export const appointmentState = atom({
  key: 'appointment',
  default: {
    day: '',
    hour: '',
  },
});
