const { UserList } = require('../data');
const _ = require('lodash')
const resolvers = {
  //all functions resolve query that you have
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
        const id = args.id;
        const user = _.find(UserList, {id: Number(id)});
        return user;
    }
  },
};

module.exports = { resolvers };
