import { useEffect, useState } from "react";
import { Send, Star } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

const initialForm = {
  name: "",
  rating: 5,
  message: "",
  code: ""
};

export default function ReviewsSection() {
  const [formData, setFormData] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const canUseSupabase = Boolean(
    import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  useEffect(() => {
    let isMounted = true;
    const fetchReviews = async () => {
      if (!canUseSupabase) {
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from("reviews")
        .select("id, name, rating, message, created_at")
        .eq("approved", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (!isMounted) return;
      if (error) {
        console.error(error);
        setStatus({
          type: "error",
          text: "No pudimos cargar las reseñas en este momento."
        });
      } else {
        setReviews(data ?? []);
      }
      setLoading(false);
    };

    fetchReviews();
    return () => {
      isMounted = false;
    };
  }, [canUseSupabase]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSending(true);

    if (!canUseSupabase) {
      setStatus({
        type: "error",
        text: "Faltan las variables de entorno de Supabase."
      });
      setIsSending(false);
      return;
    }

    const payload = {
      name: formData.name.trim(),
      rating: Number(formData.rating),
      message: formData.message.trim(),
      code: formData.code.trim()
    };

    const { error } = await supabase.from("reviews").insert(payload);

    if (error) {
      console.error(error);
      setStatus({
        type: "error",
        text: "No pudimos enviar tu reseña. Verifica tu código e inténtalo otra vez."
      });
    } else {
      setStatus({
        type: "success",
        text: "Gracias. Tu reseña quedó pendiente de aprobación."
      });
      setFormData(initialForm);
    }

    setIsSending(false);
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Columna izquierda: formulario */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reseñas de Clientes
            </h2>
            <p className="text-gray-300 mb-8">
              Queremos escuchar tu experiencia. Tu reseña ayuda a otros clientes a
              tomar una buena decisión.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 focus:border-yellow-400 focus:outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Calificación
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleRating(value)}
                      className={`p-2 rounded-md border ${
                        formData.rating >= value
                          ? "border-yellow-400 bg-yellow-400/10"
                          : "border-gray-700"
                      }`}
                      aria-label={`Calificación ${value}`}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          formData.rating >= value
                            ? "text-yellow-400"
                            : "text-gray-500"
                        }`}
                        fill={formData.rating >= value ? "currentColor" : "none"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Reseña
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 focus:border-yellow-400 focus:outline-none transition resize-none"
                  placeholder="Cuéntanos tu experiencia..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Código de Cliente
                </label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 focus:border-yellow-400 focus:outline-none transition"
                  placeholder="Ej: PW-12345"
                />
                <p className="text-xs text-gray-400 mt-2">
                  El código es necesario para publicar. Si eres cliente y no te han dado tu
                  código para comentar, escríbenos:
                  <a
                    className="text-yellow-400 hover:text-yellow-300 ml-2"
                    href="mailto:Infop8w@gmail.com"
                  >
                    correo
                  </a>
                  <span className="text-gray-500 mx-2">/</span>
                  <a
                    className="text-yellow-400 hover:text-yellow-300"
                    href="https://wa.me/34613298677"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Reseña
                  </>
                )}
              </button>

              {status && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status.text}
                </p>
              )}
            </form>
          </div>

          {/* Columna derecha: reseñas */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Lo que dicen nuestros clientes</h3>

              {loading ? (
                <p className="text-gray-400">Cargando reseñas...</p>
              ) : reviews.length === 0 ? (
                <p className="text-gray-400">
                  Aún no hay reseñas publicadas. Tu opinión puede ser la primera.
                </p>
              ) : (
                <div className="space-y-5">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-700 pb-5 last:border-b-0">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{review.name}</p>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <Star
                              key={value}
                              className={`w-4 h-4 ${
                                review.rating >= value
                                  ? "text-yellow-400"
                                  : "text-gray-600"
                              }`}
                              fill={review.rating >= value ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 mt-2">{review.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
