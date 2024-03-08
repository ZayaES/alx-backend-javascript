import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const prom1 = uploadPhoto();
  const prom2 = createUser();

  return Promise.all([prom1, prom2]).then((val) => {
    console.log(`${val[0].body} ${val[1].firstName} ${val[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
