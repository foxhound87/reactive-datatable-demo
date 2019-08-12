/* eslint-disable object-curly-newline */
export default ({ store }) => ([{
  fields: [
    'email',
    'isVerified',
  ],
  types: {
    email: 'text',
    isVerified: 'select',
  },
  bindings: {
    email: 'MaterialTextField',
  },
  rules: {
    email: 'required|email',
    isVerified: 'required|boolean',
  },
  extra: {
    isVerified: [
      { value: true, label: 'Yes' },
      { value: false, label: 'No' },
    ],
  },
  input: {
    isVerified: value => (typeof value === 'boolean') && {
      value, label: value ? 'Yes' : 'No',
    },
  },
  output: {
    isVerified: obj => obj ? obj.value : null,
  },
}, ({ form, hook, collection, item }) => {

  const error = ($form, err) => ([
    console.error(err),
    $form.invalidate(err.message),
  ]);

  hook('onSuccess', () => {
    if (item) { // update
      return item.patch(form.values())
        .then(result => item.assign(result))
        .catch(err => error(form, err));
    }

    // create
    return collection.create(form.values())
      .then(() => form.clear())
      .catch(err => error(form, err));
  });

}]);
