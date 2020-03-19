import Hello from '../../models/hello.js';

export default {
  hello: () => {
    // const hello = new Hello({
    //   hello: 'sima'
    // });

    Hello.find()
      .then(res => console.log('success', res))
      .catch(err => console.log(err));

    return 'test';
  }
};
