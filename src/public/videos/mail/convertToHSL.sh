#!/bin/bash

# Répertoire contenant les vidéos
input_directory="./"
output_directory="./hls/"

# Créer le répertoire de sortie s'il n'existe pas
mkdir -p "$output_directory"

# Parcourir tous les fichiers vidéo dans le répertoire d'entrée
for input_file in "$input_directory"/*.mov; do
  # Obtenir le nom de fichier sans le répertoire
  filename=$(basename "$input_file" .mov)
  # Définir le chemin du fichier de sortie
  output_file="$output_directory/$filename.m3u8"

  # Convertir la vidéo en segments HLS
  ffmpeg -i "$input_file" -vf "scale=1280:-2" -b:v 500k -c:v libx264 -hls_time 10 -hls_playlist_type vod "$output_file"
done

