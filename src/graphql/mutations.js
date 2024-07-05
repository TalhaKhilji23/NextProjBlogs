/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserMegaNewsTalha = /* GraphQL */ `
  mutation CreateUserMegaNewsTalha(
    $input: CreateUserMegaNewsTalhaInput!
    $condition: ModelUserMegaNewsTalhaConditionInput
  ) {
    createUserMegaNewsTalha(input: $input, condition: $condition) {
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
export const updateUserMegaNewsTalha = /* GraphQL */ `
  mutation UpdateUserMegaNewsTalha(
    $input: UpdateUserMegaNewsTalhaInput!
    $condition: ModelUserMegaNewsTalhaConditionInput
  ) {
    updateUserMegaNewsTalha(input: $input, condition: $condition) {
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
export const deleteUserMegaNewsTalha = /* GraphQL */ `
  mutation DeleteUserMegaNewsTalha(
    $input: DeleteUserMegaNewsTalhaInput!
    $condition: ModelUserMegaNewsTalhaConditionInput
  ) {
    deleteUserMegaNewsTalha(input: $input, condition: $condition) {
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
export const createMovieMegaNewsTalha = /* GraphQL */ `
  mutation CreateMovieMegaNewsTalha(
    $input: CreateMovieMegaNewsTalhaInput!
    $condition: ModelMovieMegaNewsTalhaConditionInput
  ) {
    createMovieMegaNewsTalha(input: $input, condition: $condition) {
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
export const updateMovieMegaNewsTalha = /* GraphQL */ `
  mutation UpdateMovieMegaNewsTalha(
    $input: UpdateMovieMegaNewsTalhaInput!
    $condition: ModelMovieMegaNewsTalhaConditionInput
  ) {
    updateMovieMegaNewsTalha(input: $input, condition: $condition) {
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
export const deleteMovieMegaNewsTalha = /* GraphQL */ `
  mutation DeleteMovieMegaNewsTalha(
    $input: DeleteMovieMegaNewsTalhaInput!
    $condition: ModelMovieMegaNewsTalhaConditionInput
  ) {
    deleteMovieMegaNewsTalha(input: $input, condition: $condition) {
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
export const createCommentMegaNewsTalha = /* GraphQL */ `
  mutation CreateCommentMegaNewsTalha(
    $input: CreateCommentMegaNewsTalhaInput!
    $condition: ModelCommentMegaNewsTalhaConditionInput
  ) {
    createCommentMegaNewsTalha(input: $input, condition: $condition) {
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
export const updateCommentMegaNewsTalha = /* GraphQL */ `
  mutation UpdateCommentMegaNewsTalha(
    $input: UpdateCommentMegaNewsTalhaInput!
    $condition: ModelCommentMegaNewsTalhaConditionInput
  ) {
    updateCommentMegaNewsTalha(input: $input, condition: $condition) {
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
export const deleteCommentMegaNewsTalha = /* GraphQL */ `
  mutation DeleteCommentMegaNewsTalha(
    $input: DeleteCommentMegaNewsTalhaInput!
    $condition: ModelCommentMegaNewsTalhaConditionInput
  ) {
    deleteCommentMegaNewsTalha(input: $input, condition: $condition) {
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
export const createReplyMegaNewsTalha = /* GraphQL */ `
  mutation CreateReplyMegaNewsTalha(
    $input: CreateReplyMegaNewsTalhaInput!
    $condition: ModelReplyMegaNewsTalhaConditionInput
  ) {
    createReplyMegaNewsTalha(input: $input, condition: $condition) {
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
export const updateReplyMegaNewsTalha = /* GraphQL */ `
  mutation UpdateReplyMegaNewsTalha(
    $input: UpdateReplyMegaNewsTalhaInput!
    $condition: ModelReplyMegaNewsTalhaConditionInput
  ) {
    updateReplyMegaNewsTalha(input: $input, condition: $condition) {
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
export const deleteReplyMegaNewsTalha = /* GraphQL */ `
  mutation DeleteReplyMegaNewsTalha(
    $input: DeleteReplyMegaNewsTalhaInput!
    $condition: ModelReplyMegaNewsTalhaConditionInput
  ) {
    deleteReplyMegaNewsTalha(input: $input, condition: $condition) {
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
