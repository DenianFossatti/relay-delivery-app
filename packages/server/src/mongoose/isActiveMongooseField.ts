const isActiveMongooseField = {
  isActive: {
    type: Boolean,
    description: 'Soft delete. Usually when users want to hide something from public view.',
    required: true,
    default: true,
    index: true,
  },
};

export default isActiveMongooseField;
