/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export type FilterIs =
  | 'NOT_NULL'
  | 'NULL';

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  apply_rls_policies?: Maybe<Scalars['Opaque']['output']>;
  /** Deletes zero or more records from the `general_questions` collection */
  deleteFromgeneral_questionsCollection: General_QuestionsDeleteResponse;
  /** Deletes zero or more records from the `message_list` collection */
  deleteFrommessage_listCollection: Message_ListDeleteResponse;
  /** Deletes zero or more records from the `onboarding_result` collection */
  deleteFromonboarding_resultCollection: Onboarding_ResultDeleteResponse;
  /** Deletes zero or more records from the `user_answers` collection */
  deleteFromuser_answersCollection: User_AnswersDeleteResponse;
  /** Deletes zero or more records from the `users` collection */
  deleteFromusersCollection: UsersDeleteResponse;
  /** Adds one or more `general_questions` records to the collection */
  insertIntogeneral_questionsCollection?: Maybe<General_QuestionsInsertResponse>;
  /** Adds one or more `message_list` records to the collection */
  insertIntomessage_listCollection?: Maybe<Message_ListInsertResponse>;
  /** Adds one or more `onboarding_result` records to the collection */
  insertIntoonboarding_resultCollection?: Maybe<Onboarding_ResultInsertResponse>;
  /** Adds one or more `user_answers` records to the collection */
  insertIntouser_answersCollection?: Maybe<User_AnswersInsertResponse>;
  /** Adds one or more `users` records to the collection */
  insertIntousersCollection?: Maybe<UsersInsertResponse>;
  /** Updates zero or more records in the `general_questions` collection */
  updategeneral_questionsCollection: General_QuestionsUpdateResponse;
  /** Updates zero or more records in the `message_list` collection */
  updatemessage_listCollection: Message_ListUpdateResponse;
  /** Updates zero or more records in the `onboarding_result` collection */
  updateonboarding_resultCollection: Onboarding_ResultUpdateResponse;
  /** Updates zero or more records in the `user_answers` collection */
  updateuser_answersCollection: User_AnswersUpdateResponse;
  /** Updates zero or more records in the `users` collection */
  updateusersCollection: UsersUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationApply_Rls_PoliciesArgs = {
  table_name: Scalars['String']['input'];
};


/** The root type for creating and mutating data */
export type MutationDeleteFromgeneral_QuestionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<General_QuestionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommessage_ListCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Message_ListFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromonboarding_ResultCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Onboarding_ResultFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuser_AnswersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_AnswersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromusersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntogeneral_QuestionsCollectionArgs = {
  objects: Array<General_QuestionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomessage_ListCollectionArgs = {
  objects: Array<Message_ListInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoonboarding_ResultCollectionArgs = {
  objects: Array<Onboarding_ResultInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouser_AnswersCollectionArgs = {
  objects: Array<User_AnswersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntousersCollectionArgs = {
  objects: Array<UsersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdategeneral_QuestionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<General_QuestionsFilter>;
  set: General_QuestionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemessage_ListCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Message_ListFilter>;
  set: Message_ListUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateonboarding_ResultCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Onboarding_ResultFilter>;
  set: Onboarding_ResultUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuser_AnswersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_AnswersFilter>;
  set: User_AnswersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateusersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
  set: UsersUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export type OrderByDirection =
  /** Ascending order, nulls first */
  | 'AscNullsFirst'
  /** Ascending order, nulls last */
  | 'AscNullsLast'
  /** Descending order, nulls first */
  | 'DescNullsFirst'
  /** Descending order, nulls last */
  | 'DescNullsLast';

export type PageInfo = {
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  /** A pagable collection of type `general_questions` */
  general_questionsCollection?: Maybe<General_QuestionsConnection>;
  /** A pagable collection of type `message_list` */
  message_listCollection?: Maybe<Message_ListConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `onboarding_result` */
  onboarding_resultCollection?: Maybe<Onboarding_ResultConnection>;
  request_user_id?: Maybe<Scalars['String']['output']>;
  requesting_user_id?: Maybe<Scalars['String']['output']>;
  /** A pagable collection of type `user_answers` */
  user_answersCollection?: Maybe<User_AnswersConnection>;
  /** A pagable collection of type `users` */
  usersCollection?: Maybe<UsersConnection>;
};


/** The root type for querying data */
export type QueryGeneral_QuestionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<General_QuestionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<General_QuestionsOrderBy>>;
};


/** The root type for querying data */
export type QueryMessage_ListCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Message_ListFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Message_ListOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryOnboarding_ResultCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Onboarding_ResultFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Onboarding_ResultOrderBy>>;
};


/** The root type for querying data */
export type QueryUser_AnswersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_AnswersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_AnswersOrderBy>>;
};


/** The root type for querying data */
export type QueryUsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type General_Questions = Node & {
  follow_up_conditions?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  follow_up_question?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  options: Array<Maybe<Scalars['String']['output']>>;
  question: Scalars['String']['output'];
  user_answersCollection?: Maybe<User_AnswersConnection>;
};


export type General_QuestionsUser_AnswersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_AnswersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_AnswersOrderBy>>;
};

export type General_QuestionsConnection = {
  edges: Array<General_QuestionsEdge>;
  pageInfo: PageInfo;
};

export type General_QuestionsDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<General_Questions>;
};

export type General_QuestionsEdge = {
  cursor: Scalars['String']['output'];
  node: General_Questions;
};

export type General_QuestionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<General_QuestionsFilter>>;
  follow_up_conditions?: InputMaybe<IntListFilter>;
  follow_up_question?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<General_QuestionsFilter>;
  options?: InputMaybe<StringListFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<General_QuestionsFilter>>;
  question?: InputMaybe<StringFilter>;
};

export type General_QuestionsInsertInput = {
  follow_up_conditions?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  follow_up_question?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type General_QuestionsInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<General_Questions>;
};

export type General_QuestionsOrderBy = {
  follow_up_question?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  question?: InputMaybe<OrderByDirection>;
};

export type General_QuestionsUpdateInput = {
  follow_up_conditions?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  follow_up_question?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type General_QuestionsUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<General_Questions>;
};

export type Message_List = Node & {
  created_at: Scalars['Datetime']['output'];
  isUser: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  message_id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user_id: Scalars['String']['output'];
};

export type Message_ListConnection = {
  edges: Array<Message_ListEdge>;
  pageInfo: PageInfo;
};

export type Message_ListDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Message_List>;
};

export type Message_ListEdge = {
  cursor: Scalars['String']['output'];
  node: Message_List;
};

export type Message_ListFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Message_ListFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  isUser?: InputMaybe<BooleanFilter>;
  message?: InputMaybe<StringFilter>;
  message_id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Message_ListFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Message_ListFilter>>;
  user_id?: InputMaybe<StringFilter>;
};

export type Message_ListInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  isUser?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type Message_ListInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Message_List>;
};

export type Message_ListOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  isUser?: InputMaybe<OrderByDirection>;
  message?: InputMaybe<OrderByDirection>;
  message_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Message_ListUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  isUser?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type Message_ListUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Message_List>;
};

export type Onboarding_Result = Node & {
  SADrates?: Maybe<Scalars['JSON']['output']>;
  article?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  insights?: Maybe<Scalars['JSON']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user_id: Scalars['String']['output'];
};

export type Onboarding_ResultConnection = {
  edges: Array<Onboarding_ResultEdge>;
  pageInfo: PageInfo;
};

export type Onboarding_ResultDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Onboarding_Result>;
};

export type Onboarding_ResultEdge = {
  cursor: Scalars['String']['output'];
  node: Onboarding_Result;
};

export type Onboarding_ResultFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Onboarding_ResultFilter>>;
  article?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Onboarding_ResultFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Onboarding_ResultFilter>>;
  user_id?: InputMaybe<StringFilter>;
};

export type Onboarding_ResultInsertInput = {
  SADrates?: InputMaybe<Scalars['JSON']['input']>;
  article?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  insights?: InputMaybe<Scalars['JSON']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type Onboarding_ResultInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Onboarding_Result>;
};

export type Onboarding_ResultOrderBy = {
  article?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Onboarding_ResultUpdateInput = {
  SADrates?: InputMaybe<Scalars['JSON']['input']>;
  article?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  insights?: InputMaybe<Scalars['JSON']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type Onboarding_ResultUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Onboarding_Result>;
};

export type User_Answers = Node & {
  answer?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Datetime']['output'];
  follow_up_answer?: Maybe<Scalars['String']['output']>;
  general_questions: General_Questions;
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  question_id: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

export type User_AnswersConnection = {
  edges: Array<User_AnswersEdge>;
  pageInfo: PageInfo;
};

export type User_AnswersDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Answers>;
};

export type User_AnswersEdge = {
  cursor: Scalars['String']['output'];
  node: User_Answers;
};

export type User_AnswersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_AnswersFilter>>;
  answer?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  follow_up_answer?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_AnswersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_AnswersFilter>>;
  question_id?: InputMaybe<IntFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type User_AnswersInsertInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  follow_up_answer?: InputMaybe<Scalars['String']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type User_AnswersInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Answers>;
};

export type User_AnswersOrderBy = {
  answer?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  follow_up_answer?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  question_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type User_AnswersUpdateInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  follow_up_answer?: InputMaybe<Scalars['String']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type User_AnswersUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Answers>;
};

export type Users = Node & {
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  isOnboard?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  onboarding_progress?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UsersConnection = {
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
};

export type UsersDeleteResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersEdge = {
  cursor: Scalars['String']['output'];
  node: Users;
};

export type UsersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UsersFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  isOnboard?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersFilter>;
  onboarding_progress?: InputMaybe<IntFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UsersFilter>>;
  user_id?: InputMaybe<StringFilter>;
};

export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  isOnboard?: InputMaybe<Scalars['Boolean']['input']>;
  onboarding_progress?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type UsersInsertResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  isOnboard?: InputMaybe<OrderByDirection>;
  onboarding_progress?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  isOnboard?: InputMaybe<Scalars['Boolean']['input']>;
  onboarding_progress?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type UsersUpdateResponse = {
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type GetUserAnswersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAnswersQuery = { user_answersCollection?: { edges: Array<{ node: { answer?: string | null, follow_up_answer?: string | null, general_questions: { question: string, follow_up_question?: string | null } } }> } | null };

export type GetUserAiDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAiDataQuery = { onboarding_resultCollection?: { edges: Array<{ node: { article?: string | null, insights?: any | null, SADrates?: any | null } }> } | null };

export type InsertUserAiDataMutationVariables = Exact<{
  input: Onboarding_ResultInsertInput;
}>;


export type InsertUserAiDataMutation = { insertIntoonboarding_resultCollection?: { affectedCount: number } | null };

export type GetChatMessagesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetChatMessagesQuery = { message_listCollection?: { edges: Array<{ node: { created_at: any, message?: string | null, message_id: any, isUser: boolean } }>, pageInfo: { startCursor?: string | null, hasPreviousPage: boolean } } | null };

export type InsertChatMessagesMutationVariables = Exact<{
  message: Message_ListInsertInput;
}>;


export type InsertChatMessagesMutation = { insertIntomessage_listCollection?: { affectedCount: number } | null };


export const GetUserAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserAnswers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_answersCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"follow_up_answer"}},{"kind":"Field","name":{"kind":"Name","value":"general_questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"follow_up_question"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserAnswersQuery, GetUserAnswersQueryVariables>;
export const GetUserAiDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserAIData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onboarding_resultCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"}},{"kind":"Field","name":{"kind":"Name","value":"insights"}},{"kind":"Field","name":{"kind":"Name","value":"SADrates"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserAiDataQuery, GetUserAiDataQueryVariables>;
export const InsertUserAiDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertUserAIData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"onboarding_resultInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntoonboarding_resultCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"input"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<InsertUserAiDataMutation, InsertUserAiDataMutationVariables>;
export const GetChatMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChatMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message_listCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"AscNullsFirst"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"message_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"isUser"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetChatMessagesQuery, GetChatMessagesQueryVariables>;
export const InsertChatMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertChatMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"message_listInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertIntomessage_listCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"message"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedCount"}}]}}]}}]} as unknown as DocumentNode<InsertChatMessagesMutation, InsertChatMessagesMutationVariables>;