const getLoggedInUserId = (currentPath: string): string => {
  return currentPath.split('/')[2];
};

export default getLoggedInUserId;
