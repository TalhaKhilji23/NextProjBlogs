/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUserMegaNewsTalha = /* GraphQL */ `
  subscription OnCreateUserMegaNewsTalha(
    $filter: ModelSubscriptionUserMegaNewsTalhaFilterInput
  ) {
    onCreateUserMegaNewsTalha(filter: $filter) {
      id
      first_name
      last_name
      user_name
      email
      banner_pic
      user_pic
      explanation
      movies {
        items {
          id
          title
          tag
          movieimg
          movieexplanation
          category
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          comments {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              replies {
                nextToken
                __typename
              }
              userMegaNewsTalhaUserCommentsId
              movieMegaNewsTalhaCommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userMegaNewsTalhaMoviesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userComments {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          replies {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              userMegaNewsTalhaUserRepliesId
              commentMegaNewsTalhaRepliesId
              __typename
            }
            nextToken
            __typename
          }
          userMegaNewsTalhaUserCommentsId
          movieMegaNewsTalhaCommentsId
          __typename
        }
        nextToken
        __typename
      }
      userReplies {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          userMegaNewsTalhaUserRepliesId
          commentMegaNewsTalhaRepliesId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateUserMegaNewsTalha = /* GraphQL */ `
  subscription OnUpdateUserMegaNewsTalha(
    $filter: ModelSubscriptionUserMegaNewsTalhaFilterInput
  ) {
    onUpdateUserMegaNewsTalha(filter: $filter) {
      id
      first_name
      last_name
      user_name
      email
      banner_pic
      user_pic
      explanation
      movies {
        items {
          id
          title
          tag
          movieimg
          movieexplanation
          category
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          comments {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              replies {
                nextToken
                __typename
              }
              userMegaNewsTalhaUserCommentsId
              movieMegaNewsTalhaCommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userMegaNewsTalhaMoviesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userComments {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          replies {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              userMegaNewsTalhaUserRepliesId
              commentMegaNewsTalhaRepliesId
              __typename
            }
            nextToken
            __typename
          }
          userMegaNewsTalhaUserCommentsId
          movieMegaNewsTalhaCommentsId
          __typename
        }
        nextToken
        __typename
      }
      userReplies {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          userMegaNewsTalhaUserRepliesId
          commentMegaNewsTalhaRepliesId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteUserMegaNewsTalha = /* GraphQL */ `
  subscription OnDeleteUserMegaNewsTalha(
    $filter: ModelSubscriptionUserMegaNewsTalhaFilterInput
  ) {
    onDeleteUserMegaNewsTalha(filter: $filter) {
      id
      first_name
      last_name
      user_name
      email
      banner_pic
      user_pic
      explanation
      movies {
        items {
          id
          title
          tag
          movieimg
          movieexplanation
          category
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          comments {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              replies {
                nextToken
                __typename
              }
              userMegaNewsTalhaUserCommentsId
              movieMegaNewsTalhaCommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          userMegaNewsTalhaMoviesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userComments {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          replies {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              userMegaNewsTalhaUserRepliesId
              commentMegaNewsTalhaRepliesId
              __typename
            }
            nextToken
            __typename
          }
          userMegaNewsTalhaUserCommentsId
          movieMegaNewsTalhaCommentsId
          __typename
        }
        nextToken
        __typename
      }
      userReplies {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          userMegaNewsTalhaUserRepliesId
          commentMegaNewsTalhaRepliesId
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onCreateMovieMegaNewsTalha = /* GraphQL */ `
  subscription OnCreateMovieMegaNewsTalha(
    $filter: ModelSubscriptionMovieMegaNewsTalhaFilterInput
  ) {
    onCreateMovieMegaNewsTalha(filter: $filter) {
      id
      title
      tag
      movieimg
      movieexplanation
      category
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      comments {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          replies {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              userMegaNewsTalhaUserRepliesId
              commentMegaNewsTalhaRepliesId
              __typename
            }
            nextToken
            __typename
          }
          userMegaNewsTalhaUserCommentsId
          movieMegaNewsTalhaCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userMegaNewsTalhaMoviesId
      __typename
    }
  }
`;
export const onUpdateMovieMegaNewsTalha = /* GraphQL */ `
  subscription OnUpdateMovieMegaNewsTalha(
    $filter: ModelSubscriptionMovieMegaNewsTalhaFilterInput
  ) {
    onUpdateMovieMegaNewsTalha(filter: $filter) {
      id
      title
      tag
      movieimg
      movieexplanation
      category
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      comments {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          replies {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              userMegaNewsTalhaUserRepliesId
              commentMegaNewsTalhaRepliesId
              __typename
            }
            nextToken
            __typename
          }
          userMegaNewsTalhaUserCommentsId
          movieMegaNewsTalhaCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userMegaNewsTalhaMoviesId
      __typename
    }
  }
`;
export const onDeleteMovieMegaNewsTalha = /* GraphQL */ `
  subscription OnDeleteMovieMegaNewsTalha(
    $filter: ModelSubscriptionMovieMegaNewsTalhaFilterInput
  ) {
    onDeleteMovieMegaNewsTalha(filter: $filter) {
      id
      title
      tag
      movieimg
      movieexplanation
      category
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      comments {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          replies {
            items {
              id
              comment
              userType
              user {
                id
                first_name
                last_name
                user_name
                email
                banner_pic
                user_pic
                explanation
                createdAt
                updatedAt
                __typename
              }
              userId
              createdAt
              updatedAt
              userMegaNewsTalhaUserRepliesId
              commentMegaNewsTalhaRepliesId
              __typename
            }
            nextToken
            __typename
          }
          userMegaNewsTalhaUserCommentsId
          movieMegaNewsTalhaCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userMegaNewsTalhaMoviesId
      __typename
    }
  }
`;
export const onCreateCommentMegaNewsTalha = /* GraphQL */ `
  subscription OnCreateCommentMegaNewsTalha(
    $filter: ModelSubscriptionCommentMegaNewsTalhaFilterInput
  ) {
    onCreateCommentMegaNewsTalha(filter: $filter) {
      id
      comment
      userType
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      createdAt
      updatedAt
      replies {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          userMegaNewsTalhaUserRepliesId
          commentMegaNewsTalhaRepliesId
          __typename
        }
        nextToken
        __typename
      }
      userMegaNewsTalhaUserCommentsId
      movieMegaNewsTalhaCommentsId
      __typename
    }
  }
`;
export const onUpdateCommentMegaNewsTalha = /* GraphQL */ `
  subscription OnUpdateCommentMegaNewsTalha(
    $filter: ModelSubscriptionCommentMegaNewsTalhaFilterInput
  ) {
    onUpdateCommentMegaNewsTalha(filter: $filter) {
      id
      comment
      userType
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      createdAt
      updatedAt
      replies {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          userMegaNewsTalhaUserRepliesId
          commentMegaNewsTalhaRepliesId
          __typename
        }
        nextToken
        __typename
      }
      userMegaNewsTalhaUserCommentsId
      movieMegaNewsTalhaCommentsId
      __typename
    }
  }
`;
export const onDeleteCommentMegaNewsTalha = /* GraphQL */ `
  subscription OnDeleteCommentMegaNewsTalha(
    $filter: ModelSubscriptionCommentMegaNewsTalhaFilterInput
  ) {
    onDeleteCommentMegaNewsTalha(filter: $filter) {
      id
      comment
      userType
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      createdAt
      updatedAt
      replies {
        items {
          id
          comment
          userType
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            explanation
            movies {
              items {
                id
                title
                tag
                movieimg
                movieexplanation
                category
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaMoviesId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userComments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            userReplies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            __typename
          }
          userId
          createdAt
          updatedAt
          userMegaNewsTalhaUserRepliesId
          commentMegaNewsTalhaRepliesId
          __typename
        }
        nextToken
        __typename
      }
      userMegaNewsTalhaUserCommentsId
      movieMegaNewsTalhaCommentsId
      __typename
    }
  }
`;
export const onCreateReplyMegaNewsTalha = /* GraphQL */ `
  subscription OnCreateReplyMegaNewsTalha(
    $filter: ModelSubscriptionReplyMegaNewsTalhaFilterInput
  ) {
    onCreateReplyMegaNewsTalha(filter: $filter) {
      id
      comment
      userType
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      createdAt
      updatedAt
      userMegaNewsTalhaUserRepliesId
      commentMegaNewsTalhaRepliesId
      __typename
    }
  }
`;
export const onUpdateReplyMegaNewsTalha = /* GraphQL */ `
  subscription OnUpdateReplyMegaNewsTalha(
    $filter: ModelSubscriptionReplyMegaNewsTalhaFilterInput
  ) {
    onUpdateReplyMegaNewsTalha(filter: $filter) {
      id
      comment
      userType
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      createdAt
      updatedAt
      userMegaNewsTalhaUserRepliesId
      commentMegaNewsTalhaRepliesId
      __typename
    }
  }
`;
export const onDeleteReplyMegaNewsTalha = /* GraphQL */ `
  subscription OnDeleteReplyMegaNewsTalha(
    $filter: ModelSubscriptionReplyMegaNewsTalhaFilterInput
  ) {
    onDeleteReplyMegaNewsTalha(filter: $filter) {
      id
      comment
      userType
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        explanation
        movies {
          items {
            id
            title
            tag
            movieimg
            movieexplanation
            category
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            comments {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserCommentsId
                movieMegaNewsTalhaCommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            userMegaNewsTalhaMoviesId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userComments {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            replies {
              items {
                id
                comment
                userType
                userId
                createdAt
                updatedAt
                userMegaNewsTalhaUserRepliesId
                commentMegaNewsTalhaRepliesId
                __typename
              }
              nextToken
              __typename
            }
            userMegaNewsTalhaUserCommentsId
            movieMegaNewsTalhaCommentsId
            __typename
          }
          nextToken
          __typename
        }
        userReplies {
          items {
            id
            comment
            userType
            user {
              id
              first_name
              last_name
              user_name
              email
              banner_pic
              user_pic
              explanation
              movies {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              userComments {
                nextToken
                __typename
              }
              userReplies {
                nextToken
                __typename
              }
              __typename
            }
            userId
            createdAt
            updatedAt
            userMegaNewsTalhaUserRepliesId
            commentMegaNewsTalhaRepliesId
            __typename
          }
          nextToken
          __typename
        }
        __typename
      }
      userId
      createdAt
      updatedAt
      userMegaNewsTalhaUserRepliesId
      commentMegaNewsTalhaRepliesId
      __typename
    }
  }
`;
