package com.joules.backend.Formularios;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.NonNull;

@Service
@RequiredArgsConstructor
public class FormularioService {
    private final FormularioRepository formularioRepository;

    // Create a form
    public Formulario createFormulario(@NonNull Formulario form ) {
        return formularioRepository.save(form);
    }

    // get forms
    public List<Formulario> getFormularios() {
        return formularioRepository.findAll();
    }
}
