import React, { useEffect } from 'react';
import Layout from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useTheme } from '@site/src/components/BrochureBlocks/ThemeContext';

function DocThemeSync() {
  const { frontMatter } = useDoc();
  const { changeTheme } = useTheme();

  useEffect(() => {
    changeTheme(frontMatter?.theme || 'public-blue');
  }, [frontMatter?.theme]);

  return null;
}

export default function DocItemLayout(props) {
  return (
    <>
      <DocThemeSync />
      <Layout {...props} />
    </>
  );
}
