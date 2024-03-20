package com.joules.backend.Imagenes;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ImagenController {
    private final ImagenService imagenService;

    @PostMapping("/create/imagen")
     public Imagen createImagen(@RequestBody Imagen image) {
        return imagenService.createImage(image);
    }

    @GetMapping("/imagenes")
    public List<Imagen> getImages() {
        return imagenService.getImages();
    }
}
