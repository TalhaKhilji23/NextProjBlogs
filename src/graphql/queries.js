/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserMegaNewsTalha = /* GraphQL */ `
  query GetUserMegaNewsTalha($id: ID!) {
    getUserMegaNewsTalha(id: $id) {
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
export const listUserMegaNewsTalhas = /* GraphQL */ `
  query ListUserMegaNewsTalhas(
    $filter: ModelUserMegaNewsTalhaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMegaNewsTalhas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMovieMegaNewsTalha = /* GraphQL */ `
  query GetMovieMegaNewsTalha($id: ID!) {
    getMovieMegaNewsTalha(id: $id) {
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
export const listMovieMegaNewsTalhas = /* GraphQL */ `
  query ListMovieMegaNewsTalhas(
    $filter: ModelMovieMegaNewsTalhaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovieMegaNewsTalhas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
              comments {
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
        createdAt
        updatedAt
        userMegaNewsTalhaMoviesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCommentMegaNewsTalha = /* GraphQL */ `
  query GetCommentMegaNewsTalha($id: ID!) {
    getCommentMegaNewsTalha(id: $id) {
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
export const listCommentMegaNewsTalhas = /* GraphQL */ `
  query ListCommentMegaNewsTalhas(
    $filter: ModelCommentMegaNewsTalhaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentMegaNewsTalhas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
              comments {
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
        userMegaNewsTalhaUserCommentsId
        movieMegaNewsTalhaCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReplyMegaNewsTalha = /* GraphQL */ `
  query GetReplyMegaNewsTalha($id: ID!) {
    getReplyMegaNewsTalha(id: $id) {
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
export const listReplyMegaNewsTalhas = /* GraphQL */ `
  query ListReplyMegaNewsTalhas(
    $filter: ModelReplyMegaNewsTalhaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplyMegaNewsTalhas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
              comments {
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
  }
`;
