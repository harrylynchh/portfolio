import react from '../assets/ballImages/reactjs.png';
import node from '../assets/ballImages/node.png';
import express from '../assets/ballImages/expressjs.png';
import postgresql from '../assets/ballImages/postgresql.png';
import aws from '../assets/ballImages/aws.png';
import python from '../assets/ballImages/python.png';
import numpy from '../assets/ballImages/numpy.png';
import pandas from '../assets/ballImages/pandas.png';
import c from '../assets/ballImages/c.png';
import cplusplus from '../assets/ballImages/cplusplus.png';
import csharp from '../assets/ballImages/csharp.png';
import typescript from '../assets/ballImages/typescript.png';
import javascript from '../assets/ballImages/javascript.png';
import sql from '../assets/ballImages/sql.png';
import docker from '../assets/ballImages/docker.png';
import git from '../assets/ballImages/git.png';
import azure from '../assets/ballImages/azure.png';
import dotnet from '../assets/ballImages/dotnet.png';
import tailwind from '../assets/ballImages/tailwind.png';

import awsLight from '../assets/tech_logos/light/aws_light.png';
import expressLight from '../assets/tech_logos/light/express_light.png';
import nodeLight from '../assets/tech_logos/light/nodejs_light.png';
import supabase from '../assets/tech_logos/supabase.png';
import vscode from '../assets/tech_logos/vscode.png';

export const techIcons = {
  React: react,
  'Node.js': node,
  Express: express,
  PostgreSQL: postgresql,
  AWS: aws,
  Python: python,
  NumPy: numpy,
  Pandas: pandas,
  C: c,
  'C++': cplusplus,
  'C#': csharp,
  TypeScript: typescript,
  JavaScript: javascript,
  SQL: sql,
  Docker: docker,
  Git: git,
  'Azure DevOps': azure,
  '.NET Core': dotnet,
  Tailwind: tailwind,
  Supabase: supabase,
  VSCode: vscode,
};

// Overrides for icons that need a light variant in dark mode
export const techIconsDark = {
  AWS: awsLight,
  Express: expressLight,
  'Node.js': nodeLight,
};
