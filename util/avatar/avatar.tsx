import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import styles from './style';

interface Props {
  localPath?: any;
  remotePath?: string;
  size: number;
  onClick?: () => void;
}

const Avatar: React.FC<Props> = ({localPath, remotePath, size, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} disabled={onClick == null}>
      <Image
        source={remotePath != null ? {uri: remotePath} : localPath}
        style={{
          width: size,
          height: size,
          borderRadius: size * 0.5,
        }}
      />
    </TouchableOpacity>
  );
};

export default Avatar;
