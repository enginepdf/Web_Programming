import {createStructuredSelector} from 'reselect';

// 1.
const mapStateToProps = state => {
    currentUser: selectCurrentUser(state),
    collections: selectCollectionsForPreview(state),
    isLoading: selectIsCollectionFetching(state),
  }

// 2.
  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    collections: selectCollectionsForPreview,
    isLoading: selectIsCollectionFetching,
  });