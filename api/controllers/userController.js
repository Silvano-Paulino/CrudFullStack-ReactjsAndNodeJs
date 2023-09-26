import { db } from "../db.js";

export const getUsers = (req, res) => {
    const query = "SELECT * FROM user";

    db.query(query, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addUser = (req, res) => {
    const query = "INSERT INTO user(`nome`, `email`, `telefone`, `datNascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.datNascimento,
    ];

    db.query(query, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso");
    });
}

export const updateUser = (req, res) => {
    const query = "UPDATE user SET `nome` = ?, `email` = ?, `telefone` = ?, `datNascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.datNascimento,
    ];

    db.query(query, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Alteração feita com sucesso");
    });
}

export const deleteUser = (req, res) => {
    const query = "DELETE FROM user WHERE `id` = ?";

    db.query(query, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Deletado com sucesso");
    });
}