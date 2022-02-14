module.exports = (mongoose) => {
    const Enrollment = mongoose.model('enrollment',
        mongoose.Schema({
            userId: { type: String, require: true, },
            courseId: { type: String, require: true, },
            
        }, { timestamp: true })
    );
    return Enrollment;
};