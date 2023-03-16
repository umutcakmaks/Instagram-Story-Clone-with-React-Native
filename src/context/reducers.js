import update from 'immutability-helper';

export default function (state, action) {

    switch (action.type) {

        case "FORWARD_STORY":
            if (state.storyCounter < state.storyList.length - 1) {
                if (state.storyCounter == state.storyList.length - 2) {
                    return update(state, {
                        storyComplete: { $set: true },
                        storyCounter: { $set: state.storyCounter + 1 }
                    });
                } else {
                    return update(state, {
                        storyCounter: { $set: state.storyCounter + 1 }
                    });
                }
            } else { return state }

        case "BACK_STORY":
            if (state.storyCounter < state.storyList.length && state.storyCounter > 0) {
                return update(state, {
                    storyCounter: { $set: state.storyCounter - 1 }
                });
            } else { return state }

        case "RESET_STORY":

            return update(state, {
                storyCounter: { $set: 0 }
            });

        case "FOLLOW":
            if (!state.isFollowing) {
                return update(state, {
                    follower: { $set: state.follower + 1 },
                    isFollowing: { $set: true }
                });
            } else {
                return update(state, {
                    follower: { $set: state.follower - 1 },
                    isFollowing: { $set: false }
                });
            }

        default:
            return state
    }
}