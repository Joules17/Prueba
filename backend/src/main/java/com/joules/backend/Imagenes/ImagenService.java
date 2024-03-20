package com.joules.backend.Imagenes;

import java.util.List;

import org.springframework.stereotype.Service;

import io.micrometer.common.lang.NonNull;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ImagenService {
    private final ImagenRepository imagenRepository;

    // create an image
    public Imagen createImage(@NonNull Imagen image) {
        return imagenRepository.save(image);
    }

    // get images
    public List<Imagen> getImages() {
        return imagenRepository.findAll();
    }
}
