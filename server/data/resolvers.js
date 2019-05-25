'use strict';

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
// const { User, Post, Tag } = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const slugify = require('slugify');

require('dotenv').config();
