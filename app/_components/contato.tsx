"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mjvqlpnb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          "Mensagem enviada com sucesso! Entrarei em contato em breve."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Erro ao enviar, tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro de conexão.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "mateusfranc2@gmail.com",
      action: "mailto:mateusfranc2@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      details: "+55 (11) 94634-0190",
      action: "https://wa.me/5511946340190",
    },
    {
      icon: MapPin,
      title: "Localização",
      details: "Osasco, SP - Brasil",
      action: "https://www.google.com/maps?q=Osasco,SP",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl">Vamos Trabalhar Juntos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos
              interessantes. Entre em contato e vamos conversar!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6">Informações de Contato</h3>
                <div className="space-y-4 ">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-md transition-shadow duration-300 "
                    >
                      <CardContent className="flex items-center space-x-4 ">
                        <div className="w-12 h-12  rounded-lg flex items-center justify-center bg-[#043C86] text-[#ffff]">
                          <info.icon className="w-6 h-6 text-primary " />
                        </div>
                        <div>
                          <h4>{info.title}</h4>
                          <a
                            target="_blank"
                            href={info.action}
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors  "
                          >
                            {info.details}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4">Disponibilidade</h4>
                <p className="text-muted-foreground mb-4">
                  Atualmente estou disponível para novos projetos e
                  oportunidades de trabalho. Respondo a todas as mensagens em
                  até 24 horas.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600">
                    Disponível para projetos
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/mjvqlpnb"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2 ">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Assunto da mensagem"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-me sobre seu projeto ou oportunidade..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#043C86] text-[#ffff] hover:bg-[#043C86] cursor-pointer "
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
