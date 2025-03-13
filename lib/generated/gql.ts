/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query getUserAnswers {\n  user_answersCollection {\n    edges {\n      node {\n        answer\n        follow_up_answer\n        general_questions {\n          question\n          follow_up_question\n        }\n      }\n    }\n  }\n}\n\nquery getUserAIData {\n  onboarding_resultCollection {\n    edges {\n      node {\n        article\n        insights\n        SADrates\n      }\n    }\n  }\n}\n\nmutation insertUserAIData($input: onboarding_resultInsertInput!) {\n  insertIntoonboarding_resultCollection(objects: [$input]) {\n    affectedCount\n  }\n}\n\nquery getChatMessages($cursor: Cursor) {\n  message_listCollection(\n    last: 10\n    before: $cursor\n    orderBy: {created_at: AscNullsFirst}\n  ) {\n    edges {\n      node {\n        created_at\n        message\n        message_id\n        created_at\n        isUser\n      }\n    }\n    pageInfo {\n      startCursor\n      hasPreviousPage\n    }\n  }\n}\n\nmutation insertChatMessages($message: message_listInsertInput!) {\n  insertIntomessage_listCollection(objects: [$message]) {\n    affectedCount\n  }\n}": typeof types.GetUserAnswersDocument,
};
const documents: Documents = {
    "query getUserAnswers {\n  user_answersCollection {\n    edges {\n      node {\n        answer\n        follow_up_answer\n        general_questions {\n          question\n          follow_up_question\n        }\n      }\n    }\n  }\n}\n\nquery getUserAIData {\n  onboarding_resultCollection {\n    edges {\n      node {\n        article\n        insights\n        SADrates\n      }\n    }\n  }\n}\n\nmutation insertUserAIData($input: onboarding_resultInsertInput!) {\n  insertIntoonboarding_resultCollection(objects: [$input]) {\n    affectedCount\n  }\n}\n\nquery getChatMessages($cursor: Cursor) {\n  message_listCollection(\n    last: 10\n    before: $cursor\n    orderBy: {created_at: AscNullsFirst}\n  ) {\n    edges {\n      node {\n        created_at\n        message\n        message_id\n        created_at\n        isUser\n      }\n    }\n    pageInfo {\n      startCursor\n      hasPreviousPage\n    }\n  }\n}\n\nmutation insertChatMessages($message: message_listInsertInput!) {\n  insertIntomessage_listCollection(objects: [$message]) {\n    affectedCount\n  }\n}": types.GetUserAnswersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUserAnswers {\n  user_answersCollection {\n    edges {\n      node {\n        answer\n        follow_up_answer\n        general_questions {\n          question\n          follow_up_question\n        }\n      }\n    }\n  }\n}\n\nquery getUserAIData {\n  onboarding_resultCollection {\n    edges {\n      node {\n        article\n        insights\n        SADrates\n      }\n    }\n  }\n}\n\nmutation insertUserAIData($input: onboarding_resultInsertInput!) {\n  insertIntoonboarding_resultCollection(objects: [$input]) {\n    affectedCount\n  }\n}\n\nquery getChatMessages($cursor: Cursor) {\n  message_listCollection(\n    last: 10\n    before: $cursor\n    orderBy: {created_at: AscNullsFirst}\n  ) {\n    edges {\n      node {\n        created_at\n        message\n        message_id\n        created_at\n        isUser\n      }\n    }\n    pageInfo {\n      startCursor\n      hasPreviousPage\n    }\n  }\n}\n\nmutation insertChatMessages($message: message_listInsertInput!) {\n  insertIntomessage_listCollection(objects: [$message]) {\n    affectedCount\n  }\n}"): (typeof documents)["query getUserAnswers {\n  user_answersCollection {\n    edges {\n      node {\n        answer\n        follow_up_answer\n        general_questions {\n          question\n          follow_up_question\n        }\n      }\n    }\n  }\n}\n\nquery getUserAIData {\n  onboarding_resultCollection {\n    edges {\n      node {\n        article\n        insights\n        SADrates\n      }\n    }\n  }\n}\n\nmutation insertUserAIData($input: onboarding_resultInsertInput!) {\n  insertIntoonboarding_resultCollection(objects: [$input]) {\n    affectedCount\n  }\n}\n\nquery getChatMessages($cursor: Cursor) {\n  message_listCollection(\n    last: 10\n    before: $cursor\n    orderBy: {created_at: AscNullsFirst}\n  ) {\n    edges {\n      node {\n        created_at\n        message\n        message_id\n        created_at\n        isUser\n      }\n    }\n    pageInfo {\n      startCursor\n      hasPreviousPage\n    }\n  }\n}\n\nmutation insertChatMessages($message: message_listInsertInput!) {\n  insertIntomessage_listCollection(objects: [$message]) {\n    affectedCount\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;