// action creator

export const selectLibrary = (libraryID) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
