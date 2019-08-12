const { populate } = require('feathers-hooks-common');

module.exports = {

  profile: populate({
    schema: {
      include: {
        service: 'profiles',
        nameAs: 'profile',
        childField: 'userId',
        parentField: '_id',
        provider: undefined,
        useInnerPopulate: true,
      }
    }
  }),

};
