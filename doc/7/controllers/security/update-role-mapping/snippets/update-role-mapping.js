try {
  const updatedMapping = await kuzzle.security.updateRoleMapping({
    properties: {
      description: { type: 'text' }
    }
  });

  console.log(updatedMapping);
  /*
  {
    properties: {
      description: { type: 'text' }
    }
  }
  */
} catch (e) {
  console.error(e);
}
