package com.joules.backend.Formularios;

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
public class FormularioController {
    private final FormularioService formularioService;

    @PostMapping("/create/formulario")
     public Formulario createFormulario(@RequestBody Formulario form) {
        return formularioService.createFormulario(form);
    }

    @GetMapping("/formularios")
    public List<Formulario> getNotes() {
        return formularioService.getFormularios();
    }
}
